import ReactPlayer from "react-player";
import React, {Component} from "react";
import subEs from "./subtitles/vtt/sintel-es.vtt"
import subDe from "./subtitles/vtt/sintel-de.vtt"
import { Field,reduxForm } from "redux-form";
import {Col, Row} from "antd";


class App extends Component {

    onSubmitForm= data => {
        console.log(data);
    }
    render() {
        console.log('form props', this.props);
        const {handleSubmit} = this.props;
        return (
            <div>
            <ReactPlayer controls
                         url='https://taphuan-test-api.csdl.edu.vn/ufiles/2020/e/08/5142da1a9c513f4a09000018/5f3b3988a005fe3e410ed16c.mp4'
                         config={{ file: {
                                 attributes: {
                                     crossOrigin: "anonymous"
                                 },
                                 tracks: [
                                     {kind: 'subtitles', src: 'https://taphuan-staging-api.csdl.edu.vn/ufiles/2020/e/09/5142da1a9c513f4a09000018/5f6c2f2ff221f378163540b0.vtt', srcLang: 'en',label:'English'},
                                     {kind: 'subtitles', src: subEs, srcLang: 'ja',label:'Japanese'},
                                     {kind: 'subtitles', src: subDe, srcLang: 'de',label:'France'}
                                 ]
                             }}}
            />
            <br/>
            <form onSubmit={handleSubmit(this.onSubmitForm)}>
                <Field name="file" component='input' type="file"/>
                <button
                    type="submit"
                >Save</button>
            </form>
                <Row>
                    <Col span={18}>
                        Col-18
                    </Col>
                    <Col span={6}>
                        Col-6
                    </Col>
                </Row>
            </div>
        );
    }
}


export default reduxForm({
    form: 'uploadVTT'
})(App);