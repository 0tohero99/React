import React from 'react';


const Footer = (props) => {
    const styles = {
        footer: {
            backgroundColor: "green",
            textAlign: "center",
            color: "wheat",
        }
    }
    return (
        <footer style={styles.footer}>
            <h4>New Learner &copy;{props.year}</h4>
        </footer>
    )
}
export default Footer;