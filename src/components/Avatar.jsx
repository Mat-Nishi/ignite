import styles from './Avatar.module.css'

export function Avatar({hasBorder=true, src}){
    return(
        <img className={hasBorder === false? styles.profileImgNoBorder : styles.profileImg} 
                 src={src}
                 alt="Profile img" />
    )
}