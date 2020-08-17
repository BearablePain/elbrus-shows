import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContent } from '../../redux/action';
import FilmCard from './FilmCard';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function FilmList2() {
  const filmList = useSelector((state) => state.films); //Ссылка на хранилище

  const dispatch = useDispatch();

  useEffect(() => {
    //useEffect для загрузки контента при внедрение этого компонента
    dispatch(getContent());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(0);
  const [filmsOnPage, setFilmsOnPage] = useState(20);
  const [genre, setGenre] = useState('all');
  const [filteredFilms, setFilteredFilms] = useState([]);
  const countPages = Math.ceil(filteredFilms.length / filmsOnPage);
  const pages = new Array(countPages).fill('qqq');

  useEffect(() => {
    setFilteredFilms(() => {
      if (genre !== 'all') {
        return filmList.filter((film) =>
          film.genres.some((el) => el.genre == genre)
        );
      } else {
        return [...filmList];
      }
    });
  }, [filmList, genre]);

  return (
    <>
      <select
        name=""
        id=""
        onChange={(event) => {
          setGenre(event.target.value);
        }}
      >
        <option value="all" selected>
          Не выбран
        </option>
        <option value="мультфильм">Мультфильм</option>
        <option value="драма">драма</option>
        <option value="комедия">комедия</option>
      </select>
      <div>
        {filmList &&
          filteredFilms.map((film, i) => {
            if (
              i >= currentPage * filmsOnPage &&
              i < currentPage * filmsOnPage + filmsOnPage
            ) {
              return <FilmCard film={film} />;
            }
          })}
      </div>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>

        {pages.map((elem, index) => {
          return (
            <PaginationItem>
              <PaginationLink href="#" onClick={() => setCurrentPage(index)}>{index + 1}</PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink
            next
            href="#"
            onClick={(event) => {
              event.preventDefault();
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </>
  );
}
