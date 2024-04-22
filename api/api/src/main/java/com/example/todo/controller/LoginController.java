package com.example.todo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.DTO.LoginDTO;
import com.example.todo.model.Login;
import com.example.todo.services.Login_services;

@CrossOrigin
@RestController
@RequestMapping("api/Account")
public class LoginController {
    private final Login_services loginServices;

    public LoginController(Login_services loginServices) {
        this.loginServices = loginServices;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@RequestBody Login login) {
        Optional<Login> existingUser = loginServices.getByUsername(login.getUsername());
        if (existingUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }

        Login registeredUser = loginServices.registerUser(login);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> authenticate(@RequestParam("username") String username,
            @RequestParam("password") String password) {
        if (loginServices.authenticate(username, password)) {
            Optional<Login> user = loginServices.getByUsername(username);
            // if (user.isPresent()) {
            // Map<String, Object> response = new HashMap<>();
            // response.put("id", user.get().getId());
            // response.put("username", user.get().getUsername());
            // response.put("roles", user.get().getRoles());
            // return ResponseEntity.ok(response);
            // }
            if (user.isPresent()) {
                LoginDTO loginDTO = new LoginDTO();
                loginDTO.setId(user.get().getId());
                loginDTO.setUsername(user.get().getUsername());
                loginDTO.setRoles(user.get().getRoles());
                loginDTO.setStatus(user.get().getStatus());
                return ResponseEntity.ok(loginDTO);
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }

    @GetMapping("/GetAllUsers")
    public ResponseEntity<List<Login>> getAllUsers() {
        List<Login> login = loginServices.getAlluser();
        return new ResponseEntity<>(login, HttpStatus.OK);
    }

    // Endpoint for updating user information
    @PutMapping("/updateUser{username}")
    public ResponseEntity<Login> updateUser(@PathVariable String username, @RequestBody Login updatedLogin) {
        try {
            updatedLogin.setUsername(username); // Ensure username consistency

            Login updatedUser = loginServices.updateUser(updatedLogin);
            return ResponseEntity.ok(updatedUser);
        } catch (IllegalArgumentException e) {
            // User does not exist, return 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint for changing user password
    @PatchMapping("changingPassword/{username}/password")
    public ResponseEntity<Void> changePassword(@PathVariable String username, @RequestParam String newPassword) {
        try {
            loginServices.changePassword(username, newPassword);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            // User does not exist, return 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deleteUser{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") int id) {
        try {
            loginServices.deleteUser(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
        // Endpoint for changing user roles
        @PatchMapping("changingRoles/{username}/status")
        public ResponseEntity<Void> updateRoles(@PathVariable String username, @RequestParam int status) {
            try {
                loginServices.updateRoles(username, status);
                return ResponseEntity.ok().build();
            } catch (IllegalArgumentException e) {
                // User does not exist, return 404 Not Found
                return ResponseEntity.notFound().build();
            }
        }
}
