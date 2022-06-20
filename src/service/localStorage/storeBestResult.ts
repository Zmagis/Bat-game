const fastest_bat_fly = 'fastest_bat_fly';

export const setBestResult = (result: string) => {
  localStorage.setItem(fastest_bat_fly, result);
};

export const getBestResult = () => {
  return localStorage.getItem(fastest_bat_fly);
};
