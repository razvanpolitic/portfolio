import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export class ProjectItem extends Component {
    state = {
        imgUrl: '',
        isLoaded: false
    };

    static propTypes = {
        project: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { featured_media } = this.props.project;
        const getImageUrl = axios.get(`https://razvanpolitic.com/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                isLoaded: true
            });
        });
    }

    render() {
        const { title, link } = this.props.project;
        const { imgUrl } = this.state;
        return (
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <img style={{ width: '100%' }} src={imgUrl} class="img-fluid" alt="" />
                    <div class="portfolio-info">
                        <h4>{title.rendered}</h4>
                        <p></p>
                        <div class="portfolio-links">
                            <a href={link} class="portfolio-details-lightbox" data-glightbox="type: external" title="See the project"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default ProjectItem
