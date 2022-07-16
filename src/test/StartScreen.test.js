import React from "react";
import { screen, render } from "@testing-library/react";
import StartScreen from "../componets/StartScreen";
import userEvent from "@testing-library/user-event";

describe('Checks if the "Start Screen" component is on screen', () => { 
  it('title "Secret Word"', () => {
    render(<StartScreen/>);
    
    const titleElt = screen.getByRole('heading', {name: /secret word/i});
    expect(titleElt).toBeInTheDocument();
  });

  it('text with "Clique no botão abaixo para começar a jogar"', () => {
    render(<StartScreen/>);
    
    const textElt = screen.getByText('Clique no botão abaixo para começar a jogar');
    expect(textElt).toBeInTheDocument();
  });

  it('button "Começar o jogo"', () => {
    render(<StartScreen/>);
    
    const btnElt = screen.getByRole('button', {name: /começar o jogo/i});
    expect(btnElt).toBeInTheDocument();
  });
});

describe('Checks if clicking the button, calls the startGame function', () => {
  render(<StartScreen />);

  const btnElt = screen.getByRole('button', {name: /começar o jogo/i});
  userEvent.click(btnElt);  

})