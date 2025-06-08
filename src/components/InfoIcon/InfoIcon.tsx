import styles from './InfoIcon.module.scss';

export interface InfoIconProps { 
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,
}

export const InfoIcon = ({ icon, text, isLink}: InfoIconProps) => {

  const currentText = text || 'Not Available'
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`
  }

  return (
  <div className={`${styles.infoIcon}${text ? '' : ` ${styles.empty}`}`} >
    {icon}
    <div>
      {isLink && text ? (
        <a 
        href={currentHref}
        target='_blank'
        rel='noreferrer'
        className={styles.link}
        >{currentText}</a>
      ) : currentText}
    </div>
  </div>
  )
};
