
import React from 'react'
import ReactToPrint from 'react-to-print'
import { MenuListWrapper, Link } from './styles'
import { RiPrinterFill, RiGamepadLine } from 'react-icons/ri'
import { SocialShare } from '../../components/SocialShare'
import PrintItem from '../../components/PrintItem'
import { retrieveGame } from '../../logic'

const QRCode = require('qrcode.react')

const ICON_SIZE = '14px'

export class SearchCreateMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      game: {},
      qrPrint: {}
    }
  }

  componentDidMount () {
    const qrPrint = {}
    qrPrint.quest = []

    try {
      retrieveGame(this.props.questId, (error, game) => {
        if (error) return window.alert(error.message)
        // Data to print
        qrPrint.title = game.quest.title
        game.quest.tests.map(({ title, description, qr }) => qrPrint.quest.push({
          titleTest: title,
          descTest: description,
          qrTest: qr
        }))
        this.setState({ game })
        this.setState({ qrPrint })
      })
    } catch (error) {
      window.alert(error.message)
    }
  }

  render () {
    return (
      <div>
        {this.state.qrPrint && <PrintItem game={this.state.qrPrint} ref={(el) => (this.componentRef = el)} />}

        <MenuListWrapper>
          <div className='Menu'>
            {/* <Link to='/search-access'><RiTeamLine className='Menu-Icon' size={ICON_SIZE} />Crear equipos</Link>
            <Link to='/search-create'><RiStackshareLine className='Menu-Icon' size={ICON_SIZE} />Enviar invitaciones</Link> */}
            <ReactToPrint
              trigger={() => <Link to='#'><RiPrinterFill className='Menu-Icon' size={ICON_SIZE} />Imprimir Qr Codes <span>(pruebas)</span></Link>}
              content={() => this.componentRef}
            />
            <Link to={`/search-game/${this.props.questId}`}><RiGamepadLine className='Menu-Icon' size={ICON_SIZE} />Iniciar el juego</Link>
            <SocialShare gameId={this.props.questId} />
          </div>

          <h2>Código de la búsqueda:</h2>
          <h3>{this.props.questId}</h3>

          {this.state.game.qrCode &&
            <QRCode
              className='qr-game'
              value={this.state.game.qrCode}
              size={256}
              bgColor='#ffffff'
              fgColor='#000000'
              level='L'
              includeMargin={false}
              renderAs='svg'
              imageSettings={{
                src: 'https://i.imgur.com/YGbACOg.png',
                x: null,
                y: null,
                height: 32,
                width: 96,
                excavate: false
              }}
            />}
          <p>Comparte con tus amigos el QR o el código de la búsqueda para que puedan participar en el juego.</p>
        </MenuListWrapper>
      </div>
    )
  }
}
