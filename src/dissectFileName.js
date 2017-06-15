const regEx = {
  grabBeforeSeason: /^.*(?=[sS][0-9])/,
  grabAllWords: /([a-zA-Z]+)/g,
  grabSeason: /S([0-9]+)/,
  grabEpisode: /E([0-9]+)/
};

const getShowName = fileName => {
  const [textBeforeSeason] = regEx.grabBeforeSeason.exec(fileName);
  return textBeforeSeason.match(regEx.grabAllWords).join(' ');
};

const getSeasonNumber = fileName => fileName.match(regEx.grabSeason)[1];
const getEpisodeNumber = fileName => fileName.match(regEx.grabEpisode)[1];

module.exports = fileName => ({
  showName: getShowName(fileName),
  seasonNumber: getSeasonNumber(fileName),
  episodeNumber: getEpisodeNumber(fileName)
});
