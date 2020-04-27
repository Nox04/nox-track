import mixpanel, { Dict } from 'mixpanel-browser';
import { MIX_PANEL_ID, ENVIRONMENT } from '@src/shared/constants';
import { User } from '@src/types';

const isProd = ENVIRONMENT === 'production';

export const initMP = () => {
  mixpanel.init(MIX_PANEL_ID);
};

const actions = {
  identify: (id: string) => {
    if (isProd) mixpanel.identify(id);
  },
  reset: () => {
    if (isProd) mixpanel.reset();
  },
  track: (event: string, props: Dict) => {
    if (isProd) mixpanel.track(name, props);
  },
  people: {
    set: (props: User) => {
      if (isProd) mixpanel.people.set(props);
    },
  },
};

export const Mixpanel = actions;
