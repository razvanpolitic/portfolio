import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import axios from 'axios'

export class Projects extends Component {

  state = {
    projects: [],
    imgUrl: '',
    isLoaded: false
  }

  componentDidMount() {
    axios.get('https://razvanpolitic.com/wp-json/wp/v2/projects?_embed')
      .then(res => this.setState({
        projects: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { projects, isLoaded } = this.state;
    if (isLoaded) {
      return (
          <section id="portfolio" class="portfolio section-bg">
            <div class="container">
              <div class="section-title">
                <h2>Portfolio</h2>
              </div>
              <div class="row portfolio-container" >
                {projects.map(project => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
      );
    }

    return <h3>Loading...</h3>;
  }
}

export default Projects;