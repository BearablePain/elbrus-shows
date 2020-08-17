// импортируем необходимые функции из эффектс
import { put, takeLatest, all, call } from 'redux-saga/effects';
// подключаем тип экшена, который ЗАПУСКАЕТ воркера
import { START_FETCH } from '../actionTypes';
import { receiveDataFromFetch } from '../action';
// подключаем ЭКШЕН, который кладет в редакс данные
const fetchFilmAPI = async (id = 354799) => {
  const _API_KEY = '66572abb-0a9a-4403-9927-417da01edf13';
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`,
    {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': _API_KEY },
      redirect: 'follow',
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};

// создаем воркер, который делает запрос по функции прописанной выше и запускает экшен, который положит информацию в редакс
function* fetchData(action) {
  // вызываем фетч передавая аргументы через call саги
  const data = yield call(fetchFilmAPI, action.id);
  // кладем экшен в наш редьюсер, который изменяет наш стейт
  yield put(receiveDataFromFetch(data));
}

// создаем слушателя экшенов, который принимает все экшены которые происходят

function* actionWatcher() {
  yield takeLatest(START_FETCH, fetchData);
}

// это мы импортируем в index.js и посылаем в run
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
