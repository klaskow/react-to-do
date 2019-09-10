import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";
import Column from "../Column/Column";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.image} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column className={styles.column} title="Animals" />
          <Column className={styles.column} title="Plants" />
          <Column className={styles.column} title="Minerals" />
        </div>
      </section>
    );
  }
}

export default List;
