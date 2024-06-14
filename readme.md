# Hitlist Command Line Application

Hitlist is a command line application for managing a list of foes.

Not intended for Evil! 

## Installation

To install Hitlist, you can use npm:

npm install hitlist


## Usage

### Show

To view the full list of objects on the Hitlist located in `foes.json`, run:

npm run show


### Start

To display the start message and introduction, run:

npm run start


### Title

To view the hitman title, run:

npm run title


### Add

To add a nemesis onto the foe list, run:

npm run add <number_of_nemesis>


This command will populate the inputted number of foe objects in the `foes.json` file.

### Destroy

To delete a nemesis from the foe list, run:

npm run destroy <object_id>


Input the individual id number populated with the object upon creation.

### Sort

To return only an array of objects with the specified zodiac sign you are looking for, run:

npm run sort <zodiac_sign(capitalized)>


### Edit

To edit the first name of an object, run:

npm run edit <object_id> <new_name>


Replace `<object_id>` with the ID of the object you're looking to edit and `<new_name>` with the name you wish to change it to.

## Contributing

To contribute to Hitlist, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

For support or any inquiries, please contact [kreddick@pursuit.org](kreddick@pursuit.org).

## Acknowledgements

We would like to thank Larry L, and Yassir X for their contribution to this project.




