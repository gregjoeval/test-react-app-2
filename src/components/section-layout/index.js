// @flow
import React, {Component} from 'react';
import {Grid, withStyles} from '@material-ui/core';

type Props = {
    children: Array<Node> | Node,
    classes: Object,
    disableGutter: boolean,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
};

const SectionLayout = (
    {
        children,
        classes,
        disableGutter = false,
        xs = 'auto',
        sm = 'auto',
        md = 'auto',
        lg = 'auto',
        xl = 'auto'
    }: Props
): Component => (
    <Grid
        alignItems={'stretch'}
        className={disableGutter ? '' : classes.section}
        container={true}
        direction={'row'}
        justify={'center'}
        spacing={0}
        wrap={'nowrap'}
    >
        <Grid
            item={true}
            lg={lg}
            md={md}
            sm={sm}
            xl={xl}
            xs={xs}
        >
            {children}
        </Grid>
    </Grid>
);

const styles = (theme) => ({
    section: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2
    }
});

export default withStyles(styles)(SectionLayout);