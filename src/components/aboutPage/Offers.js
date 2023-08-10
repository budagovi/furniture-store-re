import style from './Offers.module.css';
import { BookmarksIcon, CalculatorIcon, WalletIcon } from '../../assets/Icons'

const Offers = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.offer}>
        <CalculatorIcon />
        <span>Perfect Precision</span>
        <span>Egestas at faucibus neque leo ac quisque ligula ultricies euismod platea mauris.</span>
      </div>
      <div className={style.offer}>
        <BookmarksIcon />
        <span>Customizable</span>
        <span>Cras congue consequat varius sit natoque ultrices nascetur diam ut nisl congue.</span>
      </div>
      <div className={style.offer}>
        <WalletIcon />
        <span>Affordable</span>
        <span>Praesent mauris elit sed quis arcu, leo aliquet quis dignissim odio eget.</span>
      </div>
    </div>
  )
}

export default Offers;