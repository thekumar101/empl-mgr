(function() {
    'use strict';

    angular.module('app.dashboard')
        .factory('dataService', ['$q', '$timeout', dataService]);


    function dataService($q, $timeout) {

        return {
            getAllEmployees: getAllEmployees
        };

        function getAllEmployees() {

            var employeesArray = [
                {
                    id: 1,
                    firstName: 'Marie',
                    lastName: 'Banks',
                    birthDate: '1970/11/11',
                    joiningDate: '2011/11/11',
                    dept: 'Finance',
                    title: 'Analyst'
                },
                {
                    id: 2,
                    firstName: 'Daniel',
                    lastName: 'R',
                    birthDate: '1970/11/11',
                    joiningDate: '2013/10/01',
                    dept: 'Admin',
                    title: 'Manager'
                },
                {
                    id: 3,
                    firstName: 'Lanier',
                    lastName: 'Krafts',
                    birthDate: '1970/11/11',
                    joiningDate: '2014/09/02',
                    dept: 'IT',
                    title: 'Associate'
                }
            ];

            var deferred = $q.defer();

            $timeout(function() {

                deferred.resolve(employeesArray);

            }, 1500);

            return deferred.promise;
        }
    }
}());