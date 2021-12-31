import React, { Component } from 'react';
import './Livros.css';
import { Header } from '../../containers/Header/Header';
import { Section } from '../../containers/Section/Section';
import { Input } from '../../components/Input/Input';
import { List } from '../../components/List/List';
import Button from '../../components/Button/Button';
import api from '../../_config/api';
import { FaSearch } from 'react-icons/fa';

class Livros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            result: api.get('/books?name=').data,
        }
        this.fetchData = this.fetchData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange1 = this.onChange1.bind(this);
    }

    async fetchData(value) {
        const response = await api.get('/books?name=' + value)
        this.setState({ result: response?.data })
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

        const { title } = this.props;

        const { sectionData } = this.state;

        const sectionClassSearch = 'SectionSearch';

        const sectionClassData = 'SectionData';

        const inputLabel = '';

        return (
            <div className="Welcome">
                <Header title={title}></Header>
                <Section className={sectionClassSearch}>
                    <form onSubmit={this.handleSubmit}>
                        <Input label={inputLabel} onChange={this.onChange1} />
                        <Button valor={<FaSearch />} tipo={"submit"} />
                    </form>
                </Section>
                <Section className={sectionClassData}> <List data={this.state.result} /> </Section>
            </div>
        );

    }
}

export default Livros;