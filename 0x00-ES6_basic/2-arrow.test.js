import getNeighborhoodsList from './2-arrow';

describe('getNeighborhoodsList', () => {
  let neighborhoodsList;

  beforeEach(() => {
    neighborhoodsList = new getNeighborhoodsList();
  });

  test('addNeighborhood method adds a neighborhood to the list', () => {
    const newNeighborhood = 'Noe Valley';
    neighborhoodsList.addNeighborhood(newNeighborhood);
    expect(neighborhoodsList.sanFranciscoNeighborhoods).toContain(newNeighborhood);
  });

  test('addNeighborhood method returns the updated list of neighborhoods', () => {
    const newNeighborhood = 'Noe Valley';
    const updatedNeighborhoods = neighborhoodsList.addNeighborhood(newNeighborhood);
    expect(updatedNeighborhoods).toEqual(expect.arrayContaining([newNeighborhood]));
  });
});
