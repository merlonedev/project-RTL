import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente PokemonDetails.js.', () => {
  it('Verifica se: as informações do Pokemon selecionado são exibidas.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText(/More details/));
    expect(screen.getByText(/Pikachu Details/)).toBeInTheDocument();
    expect(screen.queryByText(/More details/)).toBeNull();
    expect(screen.getByRole('heading', { name: 'Summary', level: 2 }))
      .toBeInTheDocument();
    expect(screen.getByText(/This intelligent Pokémon roasts hard berries/))
      .toBeInTheDocument();
  });

  it('Verifica se: a localização do Pokemon no mapa é exibida.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText(/More details/));
    const pikachu = screen
      .getByRole('heading', { name: 'Game Locations of Pikachu', level: 2 });
    expect(pikachu).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Pikachu location' })).toHaveLength(2);
    expect(screen.getByText('Kanto Viridian Forest')).toBeInTheDocument();
    expect(screen.getByText('Kanto Power Plant')).toBeInTheDocument();
    const locationPikachu = screen.getAllByRole('img', { name: 'Pikachu location' });
    expect(locationPikachu[0]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locationPikachu[1]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Verifica se: é possível favoritar o Pokemon.', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText(/More details/));
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByAltText(/pikachu is marked as favorite/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.queryByAltText(/pikachu is marked as favorite/i)).toBeNull();
    expect(screen.getByLabelText('Pokémon favoritado?')).toBeInTheDocument();
  });
});
