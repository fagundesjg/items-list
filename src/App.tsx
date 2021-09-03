import React, { useEffect, useState } from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";

import * as S from "./styles";
import { FakeApiServices } from "./services";
import { ISnkr } from "./services/fake-api/types";

function App() {
  const [snkrs, setSnkrs] = useState<ISnkr[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchAllSnkrs() {
      setLoading(true);
      const data = await FakeApiServices.getAll();
      setSnkrs(data);
      setLoading(false);
    }

    fetchAllSnkrs();
  }, []);

  return (
    <S.Container>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {loading ? (
          <Grid item>
            <LinearProgress color="primary" />
          </Grid>
        ) : (
          snkrs.map((s, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <S.SnkrContainer>
                <img src={s.photoUrl} alt={s.name} />
                <Typography>{s.name}</Typography>
                <Typography>{s.price}</Typography>
              </S.SnkrContainer>
            </Grid>
          ))
        )}
      </Grid>
    </S.Container>
  );
}

export { App };
