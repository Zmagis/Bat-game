import moment from 'moment';

export const getDatesDiffInMiliSec = (startDate: Date) => {
  const now = moment();
  const start = moment(startDate);
  const duration = moment.duration(now.diff(start));
  return duration.asMilliseconds();
};
