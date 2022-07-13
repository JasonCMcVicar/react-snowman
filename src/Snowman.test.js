import Snowman from "./Snowman";
import { render, fireEvent } from "@testing-library/react";

//smoke test
it("it renders without crashing", function (){
  render(<Snowman />);
});

it("checking to see that guess options disappear after max guesses", function (){
  const { container } = render(<Snowman words={['cat']} maxWrong={3}/>);
  fireEvent.click(container.querySelector('button')).toContainHTML('x');
  fireEvent.click(container.querySelector('button')).toContainHTML('y');
  fireEvent.click(container.querySelector('button')).toContainHTML('z');
  expect(container.querySelector('letter-buttons')).toHaveClass('hidden');
  expect(container.querySelector('result')).toBeInTheDocument();
})
