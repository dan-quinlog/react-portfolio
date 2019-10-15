import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import BlogFeaturedImage from "../blog/blog-featured-image";
import BlogForm from "../blog/blog-form";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentID: this.props.match.params.slug,
      blogItem: {},
      editMode: false
    };

    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
    this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(
      this
    );
  }

  handleUpdateFormSubmission(blog) {
    this.setState({
      blogItem: blog,
      editMode: false
    });
  }

  handleFeaturedImageDelete() {
    this.setState({
      blogItem: {
        featured_image_url: ""
      }
    });
  }

  handleClickEdit() {
    if (this.props.loggedInStatus === "LOGGED_IN") {
      this.setState({
        editMode: true
      });
    }
  }

  getBlogItem() {
    axios
      .get(
        `https://daniel.devcamp.space/portfolio/portfolio_blogs/${this.state.currentID}`
      )
      .then(response => {
        this.setState({
          blogItem: response.data.portfolio_blog
        });
      })
      .catch(error => {
        console.log("getBlogItem error", error);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.blogItem;

    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm
            editMode={this.state.editMode}
            blog={this.state.blogItem}
            handleFeaturedImageDelete={this.handleFeaturedImageDelete}
            handleUpdateFormSubmission={this.handleUpdateFormSubmission}
          />
        );
      } else {
        return (
          <div className="content-container">
            <h1 onClick={this.handleClickEdit}>{title}</h1>
            <BlogFeaturedImage img={featured_image_url} />
            <div className="content">{ReactHtmlParser(content)}</div>
            <h3>{blog_status}</h3>
          </div>
        );
      }
    };

    return <div className="blog-container">{contentManager()}</div>;
  }
}
