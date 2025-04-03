import styles from "../page.module.scss";


export default function Portfolio() {
    return (
        <>
            <h1>Portfolio of Work</h1>
            <p className={styles.portfolioItem}><strong>Birdsnest</strong><br/>
                Womens fashion store with a strong online presence and award-winning customer service<br/>
                <em>ux design, frontend, long-term strategy, rebuild and feature contribution, 2016-2020 and
                    2022-24</em></p>

            <p className={styles.portfolioItem}><strong>My World Of Work</strong><br/>
                Skills Development Scotland’s (SDS) award-winning careers advice and information service<br/>
                <em>frontend, frontend rebuild and workflow strategy, feature contribution, 2015</em></p>

            <p className={styles.portfolioItem}><strong>Missguided</strong><br/>
                Award-winning international online fashion retailer based in the UK<br/>
                <em>frontend, feature contribution, 2014 and 2015-6</em></p>

            <p className={styles.portfolioItem}><strong>Session Digital</strong><br/>
                E-Commerce specialists and Magento Gold Partner based in the UK<br/>
                <em>frontend, feature contribution, 2013</em></p>

            <h2>A highlight of successful, slightly older projects</h2>
            <p className={styles.portfolioItem}><strong>Bathtub Gin</strong><br/>
                Unique online store selling organic artisan jam</p>

            <p className={styles.portfolioItem}><strong>Acubody</strong><br/>
                London-based natural therapies business</p>

            <p className={styles.portfolioItem}><strong>Russian Team Room</strong><br/>
                Iconic New York restaurant</p>

            <p className={styles.portfolioItem}><strong>Grizzly Guitar</strong><br/>
                Guitar repairs and services</p>

            <p className={styles.portfolioItem}><strong>BR Guest Hospitality</strong><br/>
                Restaurants and bars in the United States</p>

            <p className={styles.portfolioItem}><strong>Dos Caminos</strong><br/>
                Mexican restaurant with online booking</p>

            <p className={styles.portfolioItem}><strong>Alexander Hotels</strong><br/>
                Luxury boutique hotels near London</p>

            <p className={styles.portfolioItem}><strong>Wafi Mall Dubai</strong><br/>
                Dubai’s best shopping mall for luxury shopping with over 350 shops</p>
        </>
    )
}