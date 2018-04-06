export function initialize(application ) {
  application.inject('route', 'calculator', 'service:themes');
  application.inject('route', 'theme', 'service:themes');
}

export default {
  initialize
};
