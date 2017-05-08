import Ember from 'ember';
const { computed } = Ember;
export default Ember.Component.extend({
  classNames: ['card', 'black-text'],
  podcastLink: computed('podcast.slug', 'podcast.kind', function() {
    let slug = this.get('podcast.mediaId');
    let kind = this.get('podcast.kind');
    if (kind === 'podbean') {
      if (slug.indexOf('mw') >= 0) {
        return `https://modernweb.podbean.com/e/${slug}`;
      }
      return `https://www.podbean.com/media/share/pb-${slug}`;
    } else if (kind === 'youtube') {
      return `https://www.youtube.com/watch?v=${slug}`;
    }
  })
});
