const dissectFileName = require('../src/dissectFileName');

describe('Dissect file name', () => {
  it('should handle dots', () => {
    expect(dissectFileName('Some.Show.S15E18.HDTV.x264-SVA')).toMatchObject({
      showName: 'Some Show',
      seasonNumber: '15',
      episodeNumber: '18'
    });
  });

  it('should handle dots', () => {
    expect(
      dissectFileName('Some.Other.Show.With.John.Smith.S04E14.PROPER.720p.HDTV.X264-UAV.mkv')
    ).toMatchObject({
      showName: 'Some Other Show With John Smith',
      seasonNumber: '04',
      episodeNumber: '14'
    });
  });
});
2