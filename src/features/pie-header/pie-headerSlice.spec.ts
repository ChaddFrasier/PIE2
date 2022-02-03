import headerReducer, {
  fetchLinkAsync,
  updateState,
  HeaderState,
} from './pie-headerSlice';

describe('counter reducer', () => {
  const initialState: HeaderState = {
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(headerReducer(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
    });
  });

  it('Should update the state when told', () => {
    const actualState = headerReducer(initialState, updateState('fetching'))
    expect(actualState.status).toBe('fetching');
  });
});
