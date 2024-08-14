<script>
// JavaScript code demonstrating a simple object
const school = {
    name: 'Sacred Heart School',
    location: 'Rayagada',
    established: '1971',
    displayInfo: function () {
        console.log(`${school.name} was established
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();
</script>