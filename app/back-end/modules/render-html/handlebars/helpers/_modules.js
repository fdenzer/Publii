/*
 * Module which loads all Handlebar's helpers
 */
module.exports = {
    CSSHelper: require('./css.js'),
    fontHelper: require('./font.js').fontHelper,
    dateHelper: require('./date.js'),
    is: require('./is.js'),
    isCurrentPage: require('./is-current-page.js'),
    encodeUrl: require('./encode-url.js'),
    encodeUrlFragment: require('./encode-url-fragment.js'),
    JSHelper: require('./js.js'),
    metaDescription: require('./meta-description.js'),
    metaRobotsHelper: require('./meta-robots.js'),
    pageURLHelper: require('./page-url.js'),
    menuURLHelper: require('./menu-url.js'),
    menuItemClassesHelper: require('./menu-item-classes.js'),
    feedLinkHelper: require('./feed-link.js').feedLinkHelper,
    socialMetaTagsHelper: require('./social-meta-tags.js'),
    publiiHeadHelper: require('./publii-head.js'),
    publiiFooterHelper: require('./publii-footer.js'),
    gdprScriptBlockerHelper: require('./gdpr-script-blocker.js'),
    checkIf: require('./check-if.js'),
    checkIfAny: require('./check-if-any.js'),
    checkIfAll: require('./check-if-all.js'),
    checkIfNone: require('./check-if-none.js'),
    isEmpty: require('./is-empty.js'),
    isNotEmpty: require('./is-not-empty.js'),
    jsonLDHelper: require('./json-ld.js'),
    canonicalLinkHelper: require('./canonical-link.js'),
    ampLinkHelper: require('./amp-link.js').ampLinkHelper,
    imageDimensionsHelper: require('./image-dimensions.js'),
    responsiveSrcSetHelper: require('./responsive-srcset.js').responsiveSrcSetHelper,
    responsiveSizesHelper: require('./responsive-sizes.js').responsiveSizesHelper,
    responsiveImageAttributesHelper: require('./responsive-image-attributes.js'),
    translateHelper: require('./translate.js').translateHelper,
    math: require('./math.js'),
    jsonify: require('./jsonify.js'),
    reverse: require('./reverse.js'),
    orderby: require('./orderby.js'),
    getPostHelper: require('./get-post.js'),
    getPostsHelper: require('./get-posts.js'),
    getPostByTagsHelper: require('./get-post-by-tags.js'),
    getPostsByTagsHelper: require('./get-posts-by-tags.js'),
    getTagHelper: require('./get-tag.js'),
    getTagsHelper: require('./get-tags.js'),
    concatenate: require('./concatenate.js'),
    contains: require('./contains.js'),
    join: require('./join.js')
};
