import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {HttpService} from '../services/http.service';
import {Pet, Dog, Cat, Hamster} from '../services/pets';


@Component({
    // moduleId: module.id,
    selector: 'app-petshop',
    templateUrl: './petshop.component.html',
    styleUrls: ['./petshop.component.less']
})
export class PetshopComponent implements OnInit {
    private pets: Pet[];
    private cats: Pet[];
    private expensive: Pet[];
    private fluffyOrWhite: Pet[];

    private formAddPet: FormGroup; // create form for adding pets
    private showFormAddPet: boolean; // define to show the form or not
    private typeOfPet: string; // define what type of pet is adding

    constructor(private fb: FormBuilder, private service: HttpService) { }

    ngOnInit() {
        this.getPets();
    }

    // get array of pets with HTTP from JSON
    getPets() {
        this.service.getPets()
            .subscribe(data => {
                if (data.length) {
                    this.pets = data;
                    this.renderPetsCategory();
                }
            });
    }

    // create form for adding any pet
    createFormAddPet() {
        this.formAddPet = this.fb.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            price: ['', [
                Validators.required,
                Validators.min(10)
            ]],
            color: '#555555',
            fluffy: ''
        });
    }

    // get value from fluffy select
    levelOfFluffy(value: number) {
        let level = '';

        if (value === 1) {
            level = 'bald';
        }

        if (value === 2) {
            level = 'hairy';
        }

        if (value === 3) {
            level = 'fluffy';
        }

        return level;
    }

    // create category with any type of pets
    renderPetsCategory() {
        // get array with cats
        this.cats = getArrayOfCats(this.pets);

        // get array of pets with a price above the average
        this.expensive = getArrayExpensiveAnimals(this.pets);

        // get array of white or fluffy pets
        this.fluffyOrWhite = getArrayFluffyOrWhiteAnimals(this.pets);
    }

    showForm(type) {
        this.createFormAddPet();
        this.typeOfPet = type;
        this.showFormAddPet = !this.showFormAddPet;
    }

    addPet() {
        addPet(this.pets, this.formAddPet.value, this.typeOfPet);

        this.showFormAddPet = !this.showFormAddPet;
        this.renderPetsCategory();
    }

    delPet(id) {
        delPet(this.pets, id);

        this.renderPetsCategory();
    }
}


// choose only cats
function getArrayOfCats(animals) {
    let cats = animals.filter(animal => (animal instanceof Cat));
    return cats;
}

// choose animals with a price above the average
function getArrayExpensiveAnimals(animals) {
    let average = getAveragePrice(animals);

    let expensive = animals.filter(animal => parseInt(animal.price) > average);

    return expensive;
}

// get average price all of the animals
function getAveragePrice(animals) {
    // get the price each of the animal
    let arrayOfPrice = animals.map(animal => animal.price);
    // calculate the average price
    let average = arrayOfPrice.reduce((current, next) => parseInt(current) + parseInt(next)) / arrayOfPrice.length;

    return average;
}

// choose white or fluffy animals
function getArrayFluffyOrWhiteAnimals(animals) {
    let fluffyOrWhite = animals.filter(animal => (animal.color === '#ffffff') || animal.fluffy);
    return fluffyOrWhite;
}

// add new pet
function addPet(pets, pet, type) {
    if (type === 'dog') {
        let name = pet.name,
            price = pet.price,
            color = pet.color;

        pets.push(new Dog(name, price, color));
    }

    if (type === 'cat') {
        let name = pet.name,
            price = pet.price,
            color = pet.color,
            fluffy = pet.fluffy === 3;

        pets.push(new Cat(name, price, color, fluffy));
    }

    if (type === 'hamster') {
        let price = pet.price,
            color = pet.color,
            fluffy = pet.fluffy === 'fluffy';

        pets.push(new Hamster(price, color, fluffy));
    }
}

// delete the pet
function delPet(pets, id) {
    // define index of the pet
    let removeIndex = pets.map(pet => pet._id).indexOf(id);

    pets.splice(removeIndex, 1);
}
