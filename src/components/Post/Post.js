import React from 'react';
import { Link } from 'gatsby';

import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

//* highlights & ReactUtterences
import 'gatsby-syntax-highlights-dracula';
import ReactUtterences from 'react-utterances';

//* const
const repo = 'yeshtml5/blog-comments';

const Post = ({ post }) => {
  const { tags, title, date } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
        <div className={styles['post']}>
            <Link className={styles['post__home-button']} to="/">All Articles</Link>
            <div className={styles['post__content']}>
                <Content body={html} title={title}/>
            </div>
            <div className={styles['post__footer']}>
                <Meta date={date}/>
                <Tags tags={tags} tagSlugs={tagSlugs}/>
            </div>
            <div className={styles['post__comments']}>
                <ReactUtterences repo={repo} type={'url'}/>
            </div>
            {/* not use <div className={styles['post__comments']}><Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} /></div> */}
        </div>
  );
};

export default Post;
