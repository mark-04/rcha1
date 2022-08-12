import { Component } from "react";
import styles from "./Form.module.css";

export class Form extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className={styles.form_container}>
                <h1 className={styles.form_heading}>Создание Анкеты</h1>

                <form className={styles.form_body}>
                    <label hrmlFor="name_field" className={styles.form_label}>
                        Имя
                        <input type="text" id="name_field" placeholder="Джон"/>
                    </label>
                    <label htmlFor="surname_field" className={styles.form_label}>
                        Фамилия
                        <input type="text" id="surname_field" placeholder="Смит"/>
                    </label>
                    <label htmlFor="date_of_birth_field" className={styles.form_label}>
                        Дата рождения
                        <input type="date" id="date_of_birth_field"/>
                    </label>
                    <label htmlFor="phone_number_field" className={styles.form_label}>
                        Номер телефона
                        <input type="text" id="phone_number_field" placeholder="+380........."/>
                    </label>
                    <label htmlFor="website_field" className={styles.form_label}>
                        Сайт
                        <input type="text" id="website_field" placeholder="https://www..."/>
                    </label>
                    <label htmlFor="about_field" className={styles.form_label}>
                        О себе
                        <textarea id="about_field" cols="30" rows="7" placeholder="Я начал свою карьеру в IT с..."/>
                    </label>
                    <label htmlFor="technology_stack_field" className={styles.form_label}>
                        Стек технологий
                        <textarea id="technology_stack_field" rows="7" placeholder="К примеру, React + Node.js"/>
                    </label>
                    <label htmlFor="last_preject_description_field" className={styles.form_label}>
                        Описание последнего проекта
                        <textarea id="last_preject_description_field" rows="7" placeholder="Компания, задачи, успехи, ошибки и тд..."/>
                    </label>

                    <div className={styles.actions}>
                        <button className={styles.save_button}>Сохранить</button>
                        <button className={styles.calcel_button}>Отмена</button>
                    </div>
                </form>
            </div>
        )
    }
}