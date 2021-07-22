import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Component Tests <PokemonDetails.js />', () => {
  it('Testa se as informações detalhadas do pokémon são mostradas na tela', () => {
    renderWithRouter(<App />);
    const detail = screen.getByText(/More details/);
    userEvent.click(detail);

    const paragraph = screen.getByText(
      /This intelligent Pokémon roasts hard berries with electricity/i,
    );
    expect(paragraph).toBeInTheDocument();

    const infos = screen.getByRole('heading', { level: 2, name: 'Summary' }).innerHTML;
    expect(infos).toBe('Summary');
  });

  it('Testa seção com os mapas contendo as localizações do pokémon',
    () => {
      renderWithRouter(<App />);
      const detail = screen.getByText(/More details/i);
      userEvent.click(detail);

      const foundIn = screen.getByRole('heading', {
        level: 2,
        name: 'Game Locations of Pikachu',
      }).innerHTML;
      expect(foundIn).toBe('Game Locations of Pikachu');

      const altLocation = 'Pikachu location';
      const maps = screen.getAllByRole('img', { alt: altLocation });
      const map1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
      const map2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
      expect(maps[1].src).toBe(map1);
      expect(maps[1].alt).toBe(altLocation);
      expect(maps[2].src).toBe(map2);
      expect(maps[2].alt).toBe(altLocation);
    });

  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const detail = screen.getByText(/More details/);
    userEvent.click(detail);

    const favs = screen.getByText(/Pokémon favoritado?/);
    expect(favs).toBeInTheDocument();
  });
});
