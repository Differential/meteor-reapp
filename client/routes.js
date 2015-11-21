module.exports = ({ routes, route }) =>
  routes(require,
    route('app', '/', { dir: '' },
      route('kitchen', '/',
        route('modals'),
        route('popovers'),
        route('bars'),
        route('buttons'),
        route('cards'),
        route('drawers'),
        route('lists'),
        route('grids'),
        route('forms'),
        route('gallery'),

        // views
        route('view-lists'),
        route('dotted-view-lists'),

        // demos
        route('mailbox'),
        route('twitter',
          route('tweetView')
        )
      )
    )
  );