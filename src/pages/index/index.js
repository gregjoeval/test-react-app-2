import React from 'react';
import ScreenLayout from '../../components/screen-layout';
import ContentLayout from '../../components/content-layout';
import Typography from '@material-ui/core/Typography';

const Index = () => (
  <ScreenLayout>
    <ContentLayout>
      <Typography variant={'h5'}>
        {'Index'}
      </Typography>
      <Typography variant={'body1'}>
        {'This is the index page.'}
      </Typography>
      <Typography variant={'body1'}>
        {'Content goes here.'}
      </Typography>
    </ContentLayout>
  </ScreenLayout>
);

export default Index;