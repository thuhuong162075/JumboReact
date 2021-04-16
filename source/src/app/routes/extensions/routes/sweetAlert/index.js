import React, {useState} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'
import Button from '@material-ui/core/Button'
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const SweetAlerts =(props)=> {
  const [basic,setBasic]=useState(false);
  const [withDes,setWithDes]=useState(false);
  const [success,setSuccess]=useState(false);
  const [warning,setWarning]=useState(false);
  const [custom,setCustom]=useState(false);
  const [html,setHtml]=useState(false);
  const [prompt,setPrompt]=useState(false);
  const [password,setPassword]=useState(false);
  const [style,setStyle]=useState(false);

  const  onConfirm = () => {
    setBasic(false);
    setWithDes(false);
    setSuccess(false);
    setWarning(false);
    setCustom(false);
    setHtml(false);
    setPrompt(false);
    setPassword(false);
    setStyle(false);
  };

  const deleteFile = () => {
    setWarning(false);
  };
  const onCancelDelete = () => {
    setWarning(false);
  };
 const onCancel = () => {
   setCustom(false);
   setPrompt(false);
  };

    return (
      <div>
        <ContainerHeader title={<IntlMessages id="extension.sweetAlerts"/>} match={props.match}/>

        <div className="row">
          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">
            <Button variant="contained" color="primary" onClick={() => {
              setBasic(true)
            }}><IntlMessages id="sweetAlerts.basic"/></Button>
          </CardBox>

          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
              setWithDes(true);
            }}><IntlMessages id="sweetAlerts.description"/></Button>
          </CardBox>

          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
             setSuccess(true)
            }}><IntlMessages id="sweetAlerts.success"/></Button>
          </CardBox>

          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
              setWarning(true)
            }}><IntlMessages id="sweetAlerts.warning"/></Button>
          </CardBox>
        </div>
        <div className="row">
          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
              setCustom(true)
            }}><IntlMessages id="sweetAlerts.custom"/></Button>
          </CardBox>

          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
             setHtml(true)
            }}><IntlMessages id="sweetAlerts.htmlTag"/></Button>
          </CardBox>

          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
             setPrompt(true)
            }}><IntlMessages id="sweetAlerts.prompt"/></Button>
          </CardBox>

          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
            setPassword(true)
            }}><IntlMessages id="sweetAlerts.passwordPrompt"/></Button>
          </CardBox>
        </div>

        <div className="row">
          <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5 mb-0" childrenStyle="text-center">

            <Button variant="contained" color="primary" onClick={() => {
            setStyle(true)
            }}><IntlMessages id="sweetAlerts.customStyle"/></Button>
          </CardBox>

        </div>
        <SweetAlert show={basic} title={<IntlMessages id="sweetAlerts.hereIsaMessage"/>}
                    onConfirm={onConfirm}/>
        <SweetAlert show={withDes} title={<IntlMessages id="sweetAlerts.hereIsaMessage"/>}
                    onConfirm={onConfirm}>
          <IntlMessages id="sweetAlerts.itPretty"/>
        </SweetAlert>
        <SweetAlert show={success} success title={<IntlMessages id="sweetAlerts.goodJob"/>}
                    onConfirm={onConfirm}>
          <IntlMessages id="sweetAlerts.btnClicked"/>
        </SweetAlert>
        <SweetAlert show={warning}
                    warning
                    showCancel
                    confirmBtnText={<IntlMessages id="sweetAlerts.yesDeleteIt"/>}
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title={<IntlMessages id="sweetAlerts.areYouSure"/>}
                    onConfirm={deleteFile}
                    onCancel={onCancelDelete}
        >
          <IntlMessages id="sweetAlerts.youWillNotAble"/>
        </SweetAlert>
        <SweetAlert show={custom}
                    custom
                    showCancel
                    confirmBtnText={<IntlMessages id="button.yes"/>}
                    cancelBtnText={<IntlMessages id="button.no"/>}
                    confirmBtnBsStyle="primary"
                    cancelBtnBsStyle="default"
                    customIcon="https://via.placeholder.com/500x330"
                    title={<IntlMessages id="sweetAlerts.doYouLikeThumb"/>}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
        >
          <IntlMessages id="sweetAlerts.youWillFind"/>
        </SweetAlert>
        <SweetAlert show={html}
                    title={<span>HTML <small>Title</small>!</span>}
                    onConfirm={onConfirm}
        >
          <span>A custom <span style={{color: '#F8BB86'}}>html</span> message.</span>
        </SweetAlert>
        <SweetAlert show={prompt}
                    input
                    showCancel
                    cancelBtnBsStyle="default"
                    title={<IntlMessages id="sweetAlerts.anInput"/>}
                    inputPlaceHolder={<IntlMessages id="sweetAlerts.anInput"/>}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
        >
          <IntlMessages id="sweetAlerts.basic"/>{<IntlMessages id="sweetAlerts.writeSomething"/>}
        </SweetAlert>
        <SweetAlert show={password}
                    input
                    required
                    inputType="password"
                    title={<IntlMessages id="sweetAlerts.youMustEnterPassword"/>}
                    validationMsg="You must enter your password!"
                    onConfirm={onConfirm}
        />
        <SweetAlert show={style}
                    title="Yay!"
                    style={{backgroundColor: '#434F5A', color: '#ffffff'}}
                    onConfirm={onConfirm}
        >
          <IntlMessages id="sweetAlerts.itsBlue"/>
        </SweetAlert>
      </div>
    )
  }

export default SweetAlerts;
