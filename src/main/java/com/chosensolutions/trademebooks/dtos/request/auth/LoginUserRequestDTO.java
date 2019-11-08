package com.chosensolutions.trademebooks.dtos.request.auth;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class LoginUserRequestDTO {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

}