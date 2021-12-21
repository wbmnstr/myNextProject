import styles from './Nav';
import Nav from '../components/Nav';
import Header from '../components/Header';


const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
