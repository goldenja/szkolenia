import React , { useState } from 'react';


const RepoList = props => {
  
  return (
    <div>
      {props.repositories.length === 0 ? (
        <p>Brak repozytoriów</p>
      ) : (
        <ul>
          {props.repositories.map(repository => (
            <li key={repository.full_name}>{repository.full_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const withRepositories = Component => {
  return class WithRepositories extends React.Component {
    state = {
      repositories: []
    };

    render() {
      return (
        <Component repositories={this.state.repositories} {...this.props} />
      );
    }

    componentDidMount() {
      fetch(`https://api.github.com/users/${this.props.username}/repos`)
        .then(response => response.json())
        .then(json =>
          this.setState({
            repositories: json
          })
        );
    }
  };
};

const GithubRepoList = withRepositories(RepoList);

export default GithubRepoList;