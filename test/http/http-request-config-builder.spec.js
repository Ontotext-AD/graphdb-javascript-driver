const HttpRequestConfigBuilder = require('http/http-request-config-builder');

describe('HttpRequestConfigBuilder', () => {
  test('should init with an empty config', () => {
    expect(new HttpRequestConfigBuilder().get()).toEqual({});
  });

  test('should add a header in headers map', () => {
    expect(new HttpRequestConfigBuilder()
      .addHeader('Accept', 'text/turtle')
      .get())
      .toEqual({
        headers: {'Accept': 'text/turtle'}
      });
  });

  test('should set params provided as argument in the config', () => {
    expect(new HttpRequestConfigBuilder()
      .setParams({
        subj: 'subj',
        pred: 'pred'
      })
      .get())
      .toEqual({
        params: {
          subj: 'subj',
          pred: 'pred'
        }
      });
  });

  test('should add param in the params mapping', () => {
    expect(new HttpRequestConfigBuilder()
      .addParam('subj', 'subj')
      .addParam('pred', 'pred')
      .get())
      .toEqual({
        params: {
          subj: 'subj',
          pred: 'pred'
        }
      });
  });

  test('should get the params mapping', () => {
    expect(new HttpRequestConfigBuilder()
      .addParam('subj', 'subj')
      .addParam('pred', 'pred')
      .getParams())
      .toEqual({
        subj: 'subj',
        pred: 'pred'
      });
  });


  test('should should set timeout configuration', () => {
    expect(new HttpRequestConfigBuilder()
      .setTimeout(1000)
      .get())
      .toEqual({
        timeout: 1000
      });
  });

  test('should get the timeout configuration', () => {
    expect(new HttpRequestConfigBuilder()
      .setTimeout(1000)
      .getTimeout())
      .toEqual(1000);
  });

  test('should should set response type configuration', () => {
    expect(new HttpRequestConfigBuilder()
      .setResponseType('stream')
      .get())
      .toEqual({
        responseType: 'stream'
      });
  });

  test('should add Accept header', () => {
    expect(new HttpRequestConfigBuilder()
      .addAcceptHeader('text/turtle')
      .get())
      .toEqual({
        headers: {'Accept': 'text/turtle'}
      });
  });

  test('should add Content-Type header', () => {
    expect(new HttpRequestConfigBuilder()
      .addContentTypeHeader('text/turtle')
      .get())
      .toEqual({
        headers: {'Content-Type': 'text/turtle'}
      });
  });

  test('should skip empty header values', () => {
    expect(new HttpRequestConfigBuilder()
      .addContentTypeHeader('')
      .addAcceptHeader()
      .addHeader('custom', null)
      .get())
      .toEqual({});
  });

  test('should get the headers', () => {
    expect(new HttpRequestConfigBuilder()
      .addContentTypeHeader('text/turtle')
      .getHeaders())
      .toEqual({
        'Content-Type': 'text/turtle'
      });
  });
});
