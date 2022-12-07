describe('reject promise', () => {

  it('should not throw unhandled promise rejection', async () => {
    const rejectPromise = Promise.reject('error');
    await new Promise(resolve => setTimeout(resolve));
    await expectAsync(rejectPromise).toBeRejected();
  });
});
