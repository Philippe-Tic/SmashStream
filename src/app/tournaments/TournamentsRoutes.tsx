import React from 'react';

import { Switch, useRouteMatch } from 'react-router-dom';

import { Route } from '@/app/router';
import { PageTournaments } from '@/app/tournaments/PageTournaments';
import { Error404 } from '@/errors';

const TournamentsRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url} render={() => <PageTournaments />} />
      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

export default TournamentsRoutes;
