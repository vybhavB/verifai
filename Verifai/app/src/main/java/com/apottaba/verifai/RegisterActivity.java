package com.apottaba.verifai;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class RegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        Button registerBtn = (Button) findViewById(R.id.push_register_btn);
        registerBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent launchAttendActivity = new Intent(getApplicationContext(), AttendActivity.class);
                startActivity(launchAttendActivity);

                //STORE USER IN FIREBASE
                TextView fullName = (TextView) findViewById(R.id.fullName);
                TextView email = (TextView) findViewById(R.id.email);
                TextView studentID = (TextView) findViewById(R.id.studentID);
                TextView password = (TextView) findViewById(R.id.password);

            }
        });
    }
}
