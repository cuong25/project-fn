import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const UserPage = props =>{

    const fileInput = document.getElementById('fileInput');
    const selectImageButton = document.getElementById('selectImageButton');
    const image = document.getElementById('image');

    function showPassword() {
        // Get the password input element
        var passwordInput = document.getElementById("password");

        // Check the current type of the input element
        if (passwordInput.type === "password") {
            // If the type is "password", change it to "text" to show the password
            passwordInput.type = "text";
        } else {
            // If the type is not "password", change it back to "password" to hide the password
            passwordInput.type = "password";
        }
    }
        const [imageUrl, setImageUrl] = useState('http://placehold.it/200x200');
        const handleChange = (event) => {
        const file = event.target.files[0];
        setImageUrl(URL.createObjectURL(file));
    }
    return(
        <div>
            <div class="user-setting-container">

                <div class="profile-picture-container">
                    {imageUrl && <img id="preview" src={imageUrl} />}
                    <input type="file" onChange={handleChange} />
                </div>
                
                <form id="user-detail" method="post" action="/update-settings">  
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" value="Dinh Tuan Cuong"/>
                        <label for="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value="2000-01-01"/>
                        <label for="major">Major:</label>
                        <select id="major" name="major">
                        <option value="ICT">ICT</option>
                        <option value="PMAB">PMAB</option>
                        </select>
                        <label for="password">Password:</label>
                        <div class="password-field">
                            <input type="password" id="password" name="password"/>
                            <button class="showpass_btn" type="button" onClick={showPassword}>Show Password</button>
                            <button class="changepass_btn" type="button">Change Password</button>
                        </div>
                        <div class="user-setting-footer">
                            <button type="button">Save Change</button>
                        </div>
                </form>
               
            </div>
        </div>
    );
}
export default UserPage;