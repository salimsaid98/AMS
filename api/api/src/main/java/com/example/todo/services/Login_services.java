package com.example.todo.services;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.todo.model.Login;
import com.example.todo.repository.LoginRepository;
@Service
public class Login_services {

    private final LoginRepository loginRepository;

    public Login_services(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Login registerUser(Login login) {
    


        String username = login.getUsername();
        String password = login.getPassword();
    
        int usernameLength = username.length();
        String encryptedPassword = encryptPassword(password, usernameLength);
        login.setPassword(encryptedPassword);
    
        return loginRepository.save(login);
    }
    

    public Optional<Login> getByUsername(String username) {
        return loginRepository.getByUsername(username);
    }

    public boolean authenticate(String username, String password) {
        Optional<Login> optionalLogin = loginRepository.getByUsername(username);
        if (optionalLogin.isPresent()) {
            Login login = optionalLogin.get();
            String encryptedPassword = encryptPassword(password, username.length());
            if (encryptedPassword.equals(login.getPassword())) {
                return true; // Authentication successful
            }
        }
        return false; // Authentication failed
    }
    

    private String encryptPassword(String password, int usernameLength) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            String data = password + usernameLength;
            byte[] hash = digest.digest(data.getBytes(StandardCharsets.UTF_8));
    
            // Convert the byte array to a hexadecimal string representation
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            // Handle the exception appropriately
            e.printStackTrace();
            return null;
        }
    }
    
}
