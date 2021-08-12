import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';

describe('Verifica Pokedex.test.js', () => {
  test('Verifica se a links na pagina Inicial e botões', () => {
    renderWithRouter(<App />);

    const textPoke = screen.getByText(/Encountered pokémons/i);
    expect(textPoke).toBeDefined();
    const bttn = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(bttn).toBeDefined();

    userEvent.click(bttn);
    expect(screen.getByText(pokemons[1].name)).toBeDefined();
    userEvent.click(bttn);
    expect(screen.getByText(pokemons[2].name)).toBeDefined();
    userEvent.click(bttn);
    expect(screen.getByText(pokemons[3].name)).toBeDefined();
    userEvent.click(bttn);
    expect(screen.getByText(pokemons[4].name)).toBeDefined();
    userEvent.click(bttn);
    expect(screen.getByText(pokemons[5].name)).toBeDefined();
    userEvent.click(bttn);
    expect(screen.getByText(pokemons[6].name)).toBeDefined();
    userEvent.click(bttn);
    expect(screen.getByText(pokemons[7].name)).toBeDefined();
    userEvent.click(bttn);
    expect(screen.getByText(pokemons[8].name)).toBeDefined();
    userEvent.click(bttn);
    const type = screen.getByRole('button', { name: 'Poison' });
    expect(type).toBeDefined();
    userEvent.click(screen.getByRole('button', { name: 'Electric' }));
    userEvent.click(screen.getByRole('button', { name: 'All' }));
  });
});
