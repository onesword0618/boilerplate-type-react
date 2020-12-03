import React from 'react';
import renderer from 'react-test-renderer';
import Square from '../src/square';
describe('Squareの検証', () => {
  test('表示がスナップショットと一致すること', () => {
    const sut = renderer
      .create(
        <Square
          value="X"
          onClick={(): void => {
            'O';
          }}
        />
      )
      .toJSON();
    expect(sut).toMatchSnapshot();
  });
});
