import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";

//smoke test
it("it renders without crashing", function (){
  render(<Snowman />);
});

it("checking to see that guess options disappear after max guesses", function (){
  const { container } = render(<Snowman words={['cat']} maxWrong={3}/>);

  //Clicks 3 wrong guesses
  fireEvent.click(container.querySelector('button[value="x"]'));
  fireEvent.click(container.querySelector('button[value="y"]'));
  fireEvent.click(container.querySelector('button[value="z"]'));

  const letterButtons = container.querySelector(".letter-buttons");

  expect(letterButtons).toHaveClass('hidden');
  expect(container.querySelector('.result')).toBeInTheDocument();
})
