import React, { Component } from 'react';
import './Livros.css';
import { Header } from '../../containers/Header/Header';
import { Section } from '../../containers/Section/Section';
import { Input } from '../../components/Input/Input';
import { List } from '../../components/List/List';
import Button from '../../components/Button/Button';
import api from '../../_config/api';
import { FaSearch } from 'react-icons/fa';
const title = process.env.REACT_APP_TITLE

export class Livros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            result: this.result,
        }
        this.fetchData = this.fetchData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange1 = this.onChange1.bind(this);
    }

    async fetchData(value) {
        const response = await api.get('/books?name=' + value)
        this.setState({ result: response?.data })
        console.log(typeof (response))
    }

    handleSubmit(event) {
        this.fetchData(this.state.value1);
        event.preventDefault();
    }

    onChange1(event) {
        this.setState({ value1: event.target.value });
    }

    async componentDidMount() {
        this.fetchData(this.state.value1);
    }

    render() {

        const { result } = this.state;

        const inputLabel = '';

        return (
            <div className="Livros">
                <Header title={title}></Header>
                <Section className="search">
                    <form onSubmit={this.handleSubmit}>
                        <Input label={inputLabel} onChange={this.onChange1} />
                        <Button valor={<FaSearch />} tipo={"submit"} />
                    </form>
                </Section>
                <Section>
                    <List data={result} />
                </Section>
            </div>
        );

    }
}